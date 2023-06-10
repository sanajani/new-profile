const ProjectsHome = () => {
    return (
        <div className="min-h-screen flex justify-center items-center flex-col">
                <h1 className="text-white text-4xl text-center">Projects</h1>
            <div className="bg-red-400 h-full w-[1100px] mx-auto">
                {/* arrows */}
                <div>
                    
                    <button>left</button>
                    <button>right</button>
                </div>
                {/* sliders */}
                <div className="w-full bg-yellow-400 flex gap-8 items-center">
                    <div className="bg-red-200">
                        <img src="./assets/sana_3.jpg" className="w-[300px] h-[300px]" alt="Hello from this"/>
                        <div>
                            <h1>Screen Reader</h1>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime perspiciatis vitae amet quia perferendis ullam porro doloribus nihil esse quas.</p>
                        </div>
                    </div>
                    <div className="bg-red-700">
                        <img src="./assets/sana_3.jpg" className=" h-[300px]" alt="Hello from this"/>
                        <div>
                            <h1>Screen Reader</h1>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime perspiciatis vitae amet quia perferendis ullam porro doloribus nihil esse quas.</p>
                        </div>
                    </div>
                    <div className="bg-red-500">
                        <img src="./assets/sana_3.jpg" className="w-[300px] h-[300px]" alt="Hello from this"/>
                        <div>
                            <h1>Screen Reader</h1>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime perspiciatis vitae amet quia perferendis ullam porro doloribus nihil esse quas.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectsHome