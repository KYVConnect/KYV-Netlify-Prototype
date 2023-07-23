export default function MainContent(){
    return (
        <div className="border-2 grid grid-flow-row-dense grid-cols-3 grid-rows-3 border-red-500 flex-1">
            

            <div className="flex flex-col col-span-1 border-2 border-blue-500">
                <div className="flex border-2 border-blue-500">
                    <div className="flex flex-col p-2 border-2 border-green-500">
                        Company Image
                    </div>
                    <div className="flex flex-col flex-1 border-2 border-red-500">
                        <div className="flex">
                            Job Title
                        </div>
                        <div className="flex gap-5">
                            <div className="flex">
                                Position Length
                            </div>
                            <div className="flex">
                                Salary
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex border-2 border-green-500">
                    Summary
                </div>
            </div>

            
        </div>
    );
};