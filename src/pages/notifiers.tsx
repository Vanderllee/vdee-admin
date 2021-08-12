import Layout from "../components/template/Layout";
import useAppData from "../data/hook/useAppData";

export default function Notificacoes() {

    const dataContext = useAppData()

  return (
   <Layout title={'Notificações'} subtitle={'Página de notificações'}>
     

      <h1>{dataContext.name}</h1>

   </Layout>
  )
}
