import React, { useState, useEffect } from 'react';

const Counter = ({ target, label, h3ClassName, pClassName }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const duration = 3000; // 3 seconds
        const increment = target / (duration / 10); // Increment every 10ms

        const timer = setInterval(() => {
            start += increment;
            if (start > target) {
                setCount(target);
                clearInterval(timer);
            } else {
                setCount(Math.ceil(start));
            }
        }, 10);

        return () => clearInterval(timer);
    }, [target]);

    return (
        <div className='space-y-2'>
            <h3 className={h3ClassName}>{count}{target >= 1000 ? 'K+' : '+'}</h3>
            <p className={pClassName}>{label}</p>
        </div>
    );
};

export default Counter;