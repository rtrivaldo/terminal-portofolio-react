import Output from "../output/output"

function Socials(){
    return (
        <>
            <Output>
                <span className="text-teal-500 font-bold">Here are my social links!</span>
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
                <span>Use <span className="text-teal-500 font-bold">&apos;email&apos;</span>, <span className="text-teal-500 font-bold">&apos;linkedin&apos;</span> or <span className="text-teal-500 font-bold">&apos;github&apos;</span> to open the corresponding link.</span>
            </Output>
        </>
    )
}

export default Socials