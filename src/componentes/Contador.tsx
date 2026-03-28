import { useState } from "react";

function Contador() {
    const [count, setCount] = useState(0)

    return (
        <>
            <div className="d-flex justify-content-center gap-2">
                <div>
                    <button className="btn btn-success" 
                            onClick={() => setCount((count) => count +2)}>
                        Clicou aumenta 2
                    </button>
                </div>
                <div>
                    <button className="btn btn-primary"
                            onClick={() => setCount(0)}>
                        Clicou reseta a 0
                    </button>
                </div>
                <div>
                    <button className="btn btn-danger"
                            disabled = {count === 0}
                            onClick={() => setCount((count) => count -2)}>
                        Clicou Diminui 2
                    </button>    
                </div>
            </div>
            <div>
                <div className="card p-2 mb-5 m-5 text-center">
                    {count}
                </div>
            </div>
            
        </>
    );
}

export default Contador