import React, { useEffect } from "react";

function Alert({ type = "info", message, duration = 3000, onClose }) {
    useEffect(() => {
        if (message && duration) {
            const timer = setTimeout(() => {
                onClose && onClose();
            }, duration);
            return () => clearTimeout(timer);
        }
    }, [message, duration, onClose]);

    if (!message) return null;

    return (
        <div className={`alert alert-${type} alert-dismissible fade show`} role="alert">
            {message}
            {onClose && (
                <button
                    type="button"
                    className="btn-close"
                    onClick={onClose}
                ></button>
            )}
        </div>
    );
}

export default Alert;
