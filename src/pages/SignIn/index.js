import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Label, Row } from "../../components/Auth";
import Input from "../../components/Form/Input";
import Button from "../../components/Form/Button";
import tf1 from "../../assets/images/greentf.png"
import tf2 from "../../assets/images/pedestriangreentf.png"
import tf3 from "../../assets/images/pedestrianredtf.png"
import tf4 from "../../assets/images/redtf.png"

//page for authentication
export default function SignInPage() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  async function submit(event) {
    event.preventDefault();
    console.log(name, password)
    try {
      /* const userData = await signIn(email, password);

      setUserData(userData);

      toast('Login realizado com sucesso!');
      navigate('/dashboard'); */
    } catch (err) {
      /* toast('Não foi possível fazer o login!'); */
    }
  }

  return (
    <>
    <p>oi</p>
    <Row>
        <Label>Entrar</Label>
        <form onSubmit={submit}>
          <Input label="Username" type="text" fullWidth value={name} onChange={(e) => setName(e.target.value)} />
          <Input
            label="Senha"
            type="password"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit" color="primary" fullWidth  >
            Entrar
          </Button>          
        </form>
      </Row>
      <img src={tf1} height="100px" alt=""/>
      <img src={tf2}height="50px" alt=""/>
      <img src={tf3}height="50px" alt=""/>
      <img src={tf4}height="85px" alt=""/>
    </>
  );
}