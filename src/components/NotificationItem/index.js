import dayjs from "dayjs"
import styled from "styled-components"
import Swal from "sweetalert2";
import { sentinels_labels } from "../../constants/sentinelsLabels";
import { useEffect, useState } from "react";
import { EventLogos } from "../../constants/eventLogos";
import { SensorsLogos } from "../../constants/sensorsLogos";
import { mainColor } from "../../constants/colors";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { L, Layer } from "leaflet";
import withReactContent from "sweetalert2-react-content";
import Geohash from "../../constants/geohash";

export default function NotificationItem({notification}) {
    const [sentinel, setSentinel] = useState({sentinel_id: 0, didDocument: "did", vehicle: "NA"});
    const [logo, setLogo] = useState()
    const [plate, setPlate] = useState("-")
    const [sensor, setSensor] = useState()

    useEffect(() => {
        if (sentinels_labels.find((sentinel) => sentinel.didDocument === notification.remote.didDocument.id)){
            setSentinel(sentinels_labels.find((sentinel) => sentinel.didDocument === notification.remote.didDocument.id))
            setLogo(EventLogos[notification.notification_object.events[0].type])

            if(notification.notification_object.events[0].triggered_sensors[0].type){
                setSensor(SensorsLogos[notification.notification_object.events[0].triggered_sensors[0].type])
                if(notification.notification_object.events[0].triggered_sensors[0].value){
                    setPlate(notification.notification_object.events[0].triggered_sensors[0].value.substring(0,3)+"-"+notification.notification_object.events[0].triggered_sensors[0].value.substring(3))
                }
            }

        }
        
    }, [sentinel, notification.remote.didDocument.id, notification.notification_object.events])
    
    async function searchSentinel(notification){
        const sentinel = sentinels_labels.find((sentinel) => sentinel.didDocument === notification.remote.didDocument.id);
        
        const MSwal = withReactContent(Swal)

        MSwal.fire({
            
            title: `Sentinel ${sentinel.sentinel_id} - Vehicle ${sentinel.vehicle}`,
           
            html:   <><p style={{marginTop:'20px'}}><strong>Type:</strong> {notification.notification_object.events[0].type}</p>
            
            <p style={{marginTop:'10px'}}><strong>Value:</strong> {plate}</p>

            <p style={{marginTop:'20px', marginBottom: '20px'}}><strong>Confidence:</strong> {notification.notification_object.events[0].accuracy}</p>

            <img src={sensor} style={{height:'30px'}} alt="sensor_img"/>
            <p style={{marginTop:'20px'}}><strong>Sensor type:</strong> {notification.notification_object.events[0].triggered_sensors[0].type}</p>
            
            
            <MapContainer center={Geohash.decode(notification.notification_object.position)} zoom={20} scrollWheelZoom={true} style={{ height: '30vh', width: '99%'} }>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker
      
        position={Geohash.decode(notification.notification_object.position)}
        ><Popup
        >Position of Vehicle {sentinel.vehicle}
            </Popup></Marker>
        
            </MapContainer>
            <p>Position: https://maps.google.com/?q={Geohash.decode(notification.notification_object.position)[0]},{Geohash.decode(notification.notification_object.position)[1]}</p>
        </>,
            confirmButtonColor: mainColor,
            allowOutsideClick:true,
            imageUrl: logo,
            imageHeight: 50,
            imageAlt: "type_icon"
            //html:`<img src=${sensor} height="20px" width="20px" alt="" />`,
            
            /* content:`<img src=${sensor} height="20px" width="20px" alt="" />`, */
          });
         
  
    }

    return(
        <>
            <HoverDiv onClick={() => searchSentinel(notification)}>
            <StatusContainer>
                    {/* <img src={sensor} height={"20px"} width={"20px"} alt={""} /> */}
                    <img src={logo} height={'25px'} width={'25px'} marginRight={'10px'}alt={""} />
                    <p style={{width: '12.5%'}}>{dayjs(notification.server_timestamp).format('DD/MM - HH:mm:ss')}</p>
                    <p style={{width: '10%'}}>{sentinel.vehicle}</p>
                    <AlignP>{notification.remote.didDocument.id}</AlignP>
                    <p style={{width: '10%'}}>{notification.notification_object.events[0].type}</p>
              {notification.notification_object.events[0].accuracy.toString().length === 5 &&
                <p style={{width: '5%'}}>{notification.notification_object.events[0].accuracy}</p>
              }
               {notification.notification_object.events[0].accuracy.toString().length === 4 &&
                <p style={{width: '5%'}}>{notification.notification_object.events[0].accuracy}0</p>
              }
              {notification.notification_object.events[0].accuracy.toString().length === 2 &&
                <p style={{width: '5%'}}>{notification.notification_object.events[0].accuracy}.00</p>
              }     
                    
            </StatusContainer>
            <ItemSeparator/>
            </HoverDiv>
        </>
    )
}

const StatusContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80%;

    @media (max-width: 1350px) {
      font-size: small;
    }

    @media (max-width: 1350px) {
      font-size: x-small;
    }

    
`
const ItemSeparator = styled.div`
    height: 3px;
    margin-top: 5px;
    margin-bottom: 5px;
    width: 100%;
    background-color: #f5f5f5;
`
const HoverDiv = styled.div`
    :hover{
        background-color: lightgray;
        cursor: pointer;
    }

`
const AlignP = styled.div`
    display: flex;
    width: 25%;
    @media (max-width: 1750px) {
      height: 80%;
      font-size: small;
    }
    @media (max-width: 1550px) {
      font-size: x-small;
    }
    @media (max-width: 900px) {
      display: none;
    }
`