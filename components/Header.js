import headerStyles from '../styles/Header.module.css'

const Header = () => {
    return ( 
        <div>
            <h1 className={headerStyles.title}>
                <span>WebDev</span> News
            </h1>
            <p className={headerStyles.description}>Las ultimas noticias del mundo de la tecnologia papuuu</p>
        </div>
     );
}
 
export default Header;