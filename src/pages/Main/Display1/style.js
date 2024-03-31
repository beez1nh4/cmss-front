const DisplayContainer = styled.div`
    display: block;
    height: 400px;
    width: 600px;
    padding: 25px;
    margin: 20px;
    margin-left: 0px;
    background-color: white;
    border-radius: 15px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
`
const Title = styled.div`
    font-size: 22px;
    margin-bottom: 10px;
    color: ${mainColor};
    font-weight: bold;
    margin-bottom: 20px;
`
const BackButton = styled.button`
    height: 40px;
    width: 510px;
    padding: 10px;
    margin: 20px;
    margin-top: 160px;
    background-color: ${mainColor};
    color: white;
    font-weight: bold;
    font-size: 15px;
    margin-bottom: 20px;
    border: 0;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
    &:hover {
    background-color: lightblue;
    cursor: pointer;
    opacity: 0.7;
    }
`
const ItemSeparator = styled.div`
    height: 3px;
    width: 100%;
    background-color: #f5f5f5;
`
const ItemColor = styled.div`
    width: 20px;
    height: 20px;
    margin-right: 30px;
    background: ${props => props.color};
    border-radius: 12px;
    border: 0;
`
const StatusContainer = styled.div`
    display: flex;
    margin-top: 20px;
`