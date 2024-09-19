import Word from "components/main/word/word";
import Company from "components/main/company/company";
import Content from "components/main/content/content";
import Contact from "components/main/contact/contact";
import Footer from "components/main/footer/footer";
import Block from "components/main/block/block";



//<Block/>
//<Content/>
// <Contact/>
// <Footer/>
const Main = () =>{
    return(
        <div className="grid grid-cols-1 gap-32 md:gap-56">
            <Word/>
            <Company/>
            <Block/>
            <Content/>
            <Contact/>
            <Footer/>




        </div>
    )

}

export default Main;