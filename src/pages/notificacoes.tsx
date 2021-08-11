import Layout from "../components/template/Layout";
import { AppConsumer } from "../data/context/AppContext";

export default function Notificacoes() {
  return (
   <Layout title={'Notificações'} subtitle={'Página de notificações'}>
     
     <AppConsumer>
       {(data) => <h3>{data.name}</h3>}
     </AppConsumer>

   </Layout>
  )
}
