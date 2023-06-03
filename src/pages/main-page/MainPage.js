import Header from '../../components/header/Header';
import WithAuth from '../../hoc/WithAuth';

const MainPage = ()=> {
    return(
    <Header/>
    )
}
export default WithAuth(MainPage);