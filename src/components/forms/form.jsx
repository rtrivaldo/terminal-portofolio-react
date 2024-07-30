import { useState } from "react";

import Output from "../output/output";
import Banner from "../banner/banner";
import About from "../about/about";
import Projects from "../projects/projects";
import Educations from "../educations/educations";
import Help from "../help/help";
import Socials from "../socials/socials";

function Form(){
    const [width, setWidth] = useState(0);
    
    const handleInputChange = (event) => {
        const input = (event.target.value);
        setWidth(input.length * 8.4);
    }
    
    const [input, setInput] = useState([]);
    const [inputHistory, setInputHistory] = useState([]);
    const [caretPos, setCaretPos] = useState(0);

    const handleInput= (event) => {
        const caret = document.getElementById("caret");

        switch (event.key) {
            case "Enter":
                if (event.target.value === "linkedin") {
                    window.open("https://www.linkedin.com/in/rivaldo-tandoko/");
                } else if (event.target.value === "github") {
                    window.open("https://github.com/rtrivaldo");
                } else if (event.target.value === "email") {
                    window.open("mailto:rtrivaldo05@gmail");
                } else if (event.target.value === "portfolio") {
                    window.open("https://rivaldotandoko.vercel.app/");
                } else if (event.target.value === "expense-tracker") {
                    window.open("https://github.com/rtrivaldo/expense-tracker");
                } else if (event.target.value === "tic-tac-toe") {
                    window.open("https://tic-tac-toe-alpha-two-29.vercel.app/");
                } else if (event.target.value === "omah") {
                    window.open("https://rtrivaldo.github.io/Omah");
                } else if (event.target.value === "landscapio") {
                    window.open("https://rtrivaldo.github.io/landscapio");
                } else if (event.target.value === "sudo") {
                    window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
                } else if (event.target.value === "repo") {
                    window.open("https://github.com/rtrivaldo/terminal-portofolio-react");
                }
                
                setInput([...input, event.target.value]);
                setInputHistory([...inputHistory, event.target.value]);

                event.target.value = "";
                setWidth(0);

                break;
            
            case "ArrowLeft":
                if (caretPos > -event.target.value.length) {
                    setCaretPos(caretPos-1);
                }
                caret.style.left = (caretPos * 8.4) + "px";
                break;
            
            case "ArrowRight":
                if (caretPos < input.length) {
                    setCaretPos(caretPos+1);    
                }
                caret.style.left = (caretPos * 8.4) + "px";
                break;

            default:
                break;
        }
    }

    return (
        <div className="flex flex-col-reverse">
            <label htmlFor="input" className="my-2 flex gap-2 cursor-text">
                <span className="text-teal-500 font-bold">visitor@sycle.dev: ~$</span>
                <div className="flex">
                    <input type="text" className="bg-transparent outline-none caret-transparent" style={{width: `${width}px`}} id="input" onChange={handleInputChange} onKeyDown={handleInput} autoFocus/>
                    <div className="caret" id="caret"/>
                </div>
            </label>

            <div className="">
                <div className={inputHistory.includes("clear") || inputHistory.includes("cls") ? "hidden" : "block"}>
                    <Banner/>
                </div>

                {input.map((element, index) => {
                    switch (element) {
                        case "banner":
                            return (
                                <>
                                    <Output key={index} className="mt-2">
                                        <span><span className="text-teal-500 font-bold">visitor@sycle.dev: ~$ </span>{element}</span>
                                    </Output>
                                    <Banner key="banner"/>
                                </>
                            );

                        case "help":
                        case "h":
                            return (
                                <>
                                    <Output key={index} className="mt-2">
                                        <span><span className="text-teal-500 font-bold">visitor@sycle.dev: ~$ </span>{element}</span>
                                    </Output>
                                    <Help key="help"/>
                                </>
                            );
                            
                        case "about":
                            return (
                                <>
                                    <Output key={index} className="mt-2">
                                        <span><span className="text-teal-500 font-bold">visitor@sycle.dev: ~$ </span>{element}</span>
                                    </Output>
                                    <About key="about"/>
                                </>
                            );

                        case "projects":
                            return (
                                <>
                                    <Output key={index} className="mt-2">
                                        <span><span className="text-teal-500 font-bold">visitor@sycle.dev: ~$ </span>{element}</span>
                                    </Output>
                                    <Projects key="projects"/>
                                </>
                            );

                        case "portfolio":
                            return (
                                <>
                                    <Output key={index} className="mt-2">
                                        <span><span className="text-teal-500 font-bold">visitor@sycle.dev: ~$ </span>{element}</span>
                                    </Output>
                                    <Output key="portfolio">
                                        <span>Opening GUI portfolio...</span>
                                    </Output>
                                </>
                            );

                        case "expense-tracker":
                            return (
                                <>
                                    <Output key={index} className="mt-2">
                                        <span><span className="text-teal-500 font-bold">visitor@sycle.dev: ~$ </span>{element}</span>
                                    </Output>
                                    <Output key="expense-tracker">
                                        <span>Opening Expense tracker repository...</span>
                                    </Output>
                                </>
                            );

                        case "tic-tac-toe":
                            return (
                                <>
                                    <Output key={index} className="mt-2">
                                        <span><span className="text-teal-500 font-bold">visitor@sycle.dev: ~$ </span>{element}</span>
                                    </Output>
                                    <Output key="tic-tac-toe">
                                        <span>Opening Tic tac toe...</span>
                                    </Output>
                                </>
                            );

                        case "omah":
                            return (
                                <>
                                    <Output key={index} className="mt-2">
                                        <span><span className="text-teal-500 font-bold">visitor@sycle.dev: ~$ </span>{element}</span>
                                    </Output>
                                    <Output key="omah">
                                        <span>Opening Omah...</span>
                                    </Output>
                                </>
                            );

                        case "landscapio":
                            return (
                                <>
                                    <Output key={index} className="mt-2">
                                        <span><span className="text-teal-500 font-bold">visitor@sycle.dev: ~$ </span>{element}</span>
                                    </Output>
                                    <Output key="landscapio">
                                        <span>Opening Landscapio...</span>
                                    </Output>
                                </>
                            );
                        
                        case "educations":
                            return (
                                <>
                                    <Output key={index} className="mt-2">
                                        <span><span className="text-teal-500 font-bold">visitor@sycle.dev: ~$ </span>{element}</span>
                                    </Output>
                                    <Educations key="educations"/>
                                </>
                            );

                        case "socials":
                            return (
                                <>
                                    <Output key={index} className="mt-2">
                                        <span><span className="text-teal-500 font-bold">visitor@sycle.dev: ~$ </span>{element}</span>
                                    </Output>
                                    <Socials key="socials"/>
                                </>
                            );

                        case "linkedin":
                            return (
                                <>
                                    <Output key={index} className="mt-2">
                                        <span><span className="text-teal-500 font-bold">visitor@sycle.dev: ~$ </span>{element}</span>
                                    </Output>
                                    <Output key="linkedin">
                                        <span>Opening LinkedIn...</span>
                                    </Output>
                                </>
                            );

                        case "github":
                            return (
                                <>
                                    <Output key={index} className="mt-2">
                                        <span><span className="text-teal-500 font-bold">visitor@sycle.dev: ~$ </span>{element}</span>
                                    </Output>
                                    <Output key="github">
                                        <span>Opening Github...</span>
                                    </Output>
                                </>
                            );

                        case "email":
                            return (
                                <>
                                    <Output key={index} className="mt-2">
                                        <span><span className="text-teal-500 font-bold">visitor@sycle.dev: ~$ </span>{element}</span>
                                    </Output>
                                    <Output key="github">
                                        <span>Opening mailto: rtrivaldo05@gmail</span>
                                    </Output>
                                </>
                            );
                        
                        case "sudo":
                            return (
                                <>
                                    <Output key={index} className="mt-2">
                                        <span><span className="text-teal-500 font-bold">visitor@sycle.dev: ~$ </span>{element}</span>
                                    </Output>
                                    <Output key="github">
                                        <span>Oh no, you&apos;re not admin...</span>
                                    </Output>
                                </>
                            );

                        case "repo":
                            return (
                                <>
                                    <Output key={index} className="mt-2">
                                        <span><span className="text-teal-500 font-bold">visitor@sycle.dev: ~$ </span>{element}</span>
                                    </Output>
                                    <Output key="github">
                                        <span>Opening this projects repository...</span>
                                    </Output>
                                </>
                            );
                            
                        case "theme":
                            return (
                                <>
                                    <Output key={index} className="mt-2">
                                        <span><span className="text-teal-500 font-bold">visitor@sycle.dev: ~$ </span>{element}</span>
                                    </Output>
                                    <Output key="github">
                                        <span>Coming soon...</span>
                                    </Output>
                                </>
                            );

                        case "clear":
                        case "cls":
                            setInput([]);
                            break;

                        default:
                            return (
                                <>
                                    <Output key={index} className="mt-2">
                                        <span><span className="text-teal-500 font-bold">visitor@sycle.dev: ~$ </span>{element}</span>
                                    </Output>
                                    <Output key={index}>
                                        <span>Command not found. For a list of commands, type &apos;help&apos;.</span>
                                    </Output>
                                </>
                            );
                    }
                })}

            </div>
        </div>
    )
}

export default Form