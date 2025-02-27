import React from 'react'

export default function Fade ({ isActive, children }) {
    // return isActive && children
    return (
        <>
            {isActive && (
                <div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    {children}
                </div>
            )}
        </>
    )
}