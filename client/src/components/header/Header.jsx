import "./header.css";

const Header = () => {
    return (
        <div className='header'>
            <div className="headerTitles">
                <span className="headerTitleSm">React & Node</span>
                <span className="headerTitleLg">Blog</span>
            </div>
            <img className="headerImg" src='https://res.cloudinary.com/practicaldev/image/fetch/s--uT2ERLyE--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://reactnative.dev/blog/assets/oss-roadmap-hero.jpg' alt="" />
        </div>
    )
}

export default Header