import React, { useState } from 'react'

const ModalLogin = () => {
    const [isOpen, setOpen] = useState(false)
    
    return (
        <div>
            <button className="btn-primary" onClick={() => setOpen(true)}>VIEW DEMO</button>
        </div>
    );
};

export default ModalLogin;