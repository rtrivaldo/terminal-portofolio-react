import Output from "../output/output"

function About() {
    return (
        <>     
            <Output>
                <span>Hi, my name is <span className="text-teal-500 font-bold">Rivaldo Tandoko</span>, a <span className="text-teal-500 font-bold">full-stack web developer.</span></span>
            </Output>

            <Output>
                <span>An undergraduate student who is passionate about coding and learning new technologies.</span>
            </Output>
            
            <br />

            <Output>
                <span>I&apos;m open for new opportunities and would love to chat and share my latest coding adventures.</span>
            </Output>

            <Output>
                <span>Feel free to reach out to me:</span>
            </Output>

            <br />

            <Output>
                <span>Email: <span className="text-teal-500 font-bold">rtrivaldo05@gmail.com</span></span>
            </Output>

            <Output>
                <span>LinkedIn: <span className="text-teal-500 font-bold underline cursor-pointer">https://www.linkedin.com/in/rivaldo-tandoko/</span></span>
            </Output>

            <Output>
                <span>GitHub: <span className="text-teal-500 font-bold underline cursor-pointer">https://github.com/rivaldotandoko</span></span>
            </Output>

            <br />
            
            <Output>
                <span>Thank you!</span>
            </Output>
        </>
    );
}

export default About