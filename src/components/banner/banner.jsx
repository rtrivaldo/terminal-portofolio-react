import Output from "../output/output"

function Banner() {
    const banner = [
        " /$$$$$$$  /$$                     /$$       /$$                 /$$$$$$$$                        /$$           /$$",
        "| $$__  $$|__/                    | $$      | $$                |__  $$__/                       | $$          | $$",
        "| $$  \\ $$ /$$ /$$    /$$ /$$$$$$ | $$  /$$$$$$$  /$$$$$$          | $$  /$$$$$$  /$$$$$$$   /$$$$$$$  /$$$$$$ | $$   /$$  /$$$$$$",
        "| $$$$$$$/| $$|  $$  /$$/|____  $$| $$ /$$__  $$ /$$__  $$         | $$ |____  $$| $$__  $$ /$$__  $$ /$$__  $$| $$  /$$/ /$$__  $$",
        "| $$__  $$| $$ \\  $$/$$/  /$$$$$$$| $$| $$  | $$| $$  \\ $$         | $$  /$$$$$$$| $$  \\ $$| $$  | $$| $$  \\ $$| $$$$$$/ | $$  \\ $$",
        "| $$  \\ $$| $$  \\  $$$/  /$$__  $$| $$| $$  | $$| $$  | $$         | $$ /$$__  $$| $$  | $$| $$  | $$| $$  | $$| $$_  $$ | $$  | $$",
        "| $$  | $$| $$   \\  $/  |  $$$$$$$| $$|  $$$$$$$|  $$$$$$/         | $$|  $$$$$$$| $$  | $$|  $$$$$$$|  $$$$$$/| $$ \\  $$|  $$$$$$/",
        "|__/  |__/|__/    \\_/    \\_______/|__/ \\_______/ \\______/          |__/ \\_______/|__/  |__/ \\_______/ \\______/ |__/  \\__/ \\______/",
        "",
        "",
    ];

    return (
        <div className="whitespace-pre">
            {banner.map((element, index) => (
                <Output key={index}>
                    <span className="text-teal-500 font-bold">{element}</span>
                </Output>
            ))}

            <Output>
                <span>Welcome to my terminal portfolio.</span>
            </Output>

            <Output>
                <span>Here you can get some information about me.</span>
            </Output>

            <Output>
                <span>---------------------------------------------</span>
            </Output>
            
            <Output>
                <span>Type <span className="text-teal-500 font-bold">&apos;help&apos;</span> to see all available commands.</span>
            </Output>
        </div>
    );
}

export default Banner