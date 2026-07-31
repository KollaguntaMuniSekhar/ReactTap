import "./ProfileCard.css"
 export default function ProfileCard(props){
    return (
        <div className="profile-card">
           <img  className="avatar" src="https://scontent.cdninstagram.com/v/t51.2885-19/337921900_874364333667074_4375811534790468968_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_cat=108&ccb=7-5&_nc_sid=f7ccc5&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy4xMDgwLkMzIn0%3D&_nc_ohc=YN1l480G0L8Q7kNvwHPNYuP&_nc_oc=AdrxP0IwKbBml8oMFh0zHhhQtgVGosF_Yd6XqEwDOuDxYnbVJpLMtEUL_g6uX0AisCM&_nc_zt=24&_nc_ht=scontent.cdninstagram.com&_nc_ss=7b689&oh=00_AQHsgSCn-A8FCi_61CQLM5gN3_T-wLPKVJzBP58Q6Ym3_g&oe=6A72AD04" alt="Kollagunta Muni Sekhar" />
           <h1 className="name"> {props.name}</h1>
           <h4 className="title">React Developer</h4>
           <p className="bio">Aspiring Developer in  full Stack</p>
           <div className="social-links">
            <a href=""> X</a>
            <a href=""> Insta</a>
            <a href=""> Linkedin</a>
           </div>
        </div>
    )
}