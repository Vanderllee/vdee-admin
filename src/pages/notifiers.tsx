import Layout from "../components/template/Layout";
import useAppData from "../data/hook/useAppData";

export default function Notificacoes() {

    //const dataContext = useAppData()
    const { handleTheme } = useAppData();
  return (
   <Layout title={'Notificações'} subtitle={'Página de notificações'}>
     
     <button onClick={handleTheme}> trocar de Tema! </button>

   </Layout>
  )
}
