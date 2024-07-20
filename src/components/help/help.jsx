import Output from "../output/output"

function Help(){
    return (
        <div className="whitespace-pre my-2 ml-[34px]">
            <Output>
                <span><span className="text-teal-500 font-bold">about</span>            Information about me</span>
            </Output>
            <Output>
                <span><span className="text-teal-500 font-bold">banner</span>           Display the header</span>
            </Output>
            <Output>
                <span><span className="text-teal-500 font-bold">clear, cls</span>       Clear the terminal</span>
            </Output>
            <Output>
                <span><span className="text-teal-500 font-bold">educations</span>       Display my educational background</span>
            </Output>
            <Output>
                <span><span className="text-teal-500 font-bold">email</span>            Mail me</span>
            </Output>
            <Output>
                <span><span className="text-teal-500 font-bold">github</span>           Head to my github profile</span>
            </Output>
            <Output>
                <span><span className="text-teal-500 font-bold">help, h</span>          You obviously already know what this does</span>
            </Output>
            <Output>
                <span><span className="text-teal-500 font-bold">landscapio</span>       Open &apos;Landscapio&apos; in new tab</span>
            </Output>
            <Output>
                <span><span className="text-teal-500 font-bold">linkedin</span>         Head to my linkedin profile</span>
            </Output>
            <Output>
                <span><span className="text-teal-500 font-bold">omah</span>             Open &apos;Omah&apos; in new tab</span>
            </Output>
            <Output>
                <span><span className="text-teal-500 font-bold">portofolio</span>       Head to my GUI portofolio</span>
            </Output>
            <Output>
                <span><span className="text-teal-500 font-bold">projects</span>         Display my projects</span>
            </Output>
            <Output>
                <span><span className="text-teal-500 font-bold">socials</span>          Display social networks</span>
            </Output>
            <Output>
                <span><span className="text-teal-500 font-bold">sudo</span>             Use superuser privileges</span>
            </Output>
        </div>
    )
}

export default Help