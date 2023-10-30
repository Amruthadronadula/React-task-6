import './Content.css'
import Pic from './ResumePic.jpg'
function Home(){
    return(
        <div>
            <div className='intro'>
                <img src={Pic} alt='pictur'></img>
                <div className="container-fluid text-center" id="name"> Amrutha Dronadula</div>
                <div className="container-fluid text-end" id='profession'>Currently a third year student in Vit-Ap</div>
            </div>
            <div>
                <div className='dummy'></div>
                <div className='text-start' id='aboutme'>About Me:</div>
                <div className='text-start' id='aboutmecontent'>Greetings! I'm Amrutha Dronadula in a  third-year Computer Science major at Vit -Ap University. With a solid foundation in programming languages like Python, Java, and C++, I have  a keen interest in web development,
                                                                demonstrated by my proficiency in HTML, CSS, and JavaScript. my  standout project involves creating a dynamic e-commerce website, showcasing my skills in both frontend and backend technologies. my academic achievements include winning first place in the university's coding competition.
                                                                  I am also a dedicated open-source contributor, with several impactful contributions on my GitHub profile.  I actively seeking opportunities to apply my knowledge in software engineering and web development roles.
                </div>
            </div>
        </div>
    )
}
export default Home;