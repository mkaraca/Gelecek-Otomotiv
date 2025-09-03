"use client";

import React, { useState, useEffect } from "react";

const ModalImage = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (window.location.pathname !== '/') return;

    const modalData = JSON.parse(sessionStorage.getItem('modalData') || '{}');
    const now = new Date().getTime();
    const sessionTime = 15 * 1000;
    // const waitTime = 3 * 1000;
    const waitTime = 0;

    const showModal = () => {
      if (!modalData.lastShown || (now - modalData.lastShown) > sessionTime) {
        setIsOpen(true);
        sessionStorage.setItem('modalData', JSON.stringify({
          lastShown: now
        }));
      }
    };

    const timer = setTimeout(showModal, waitTime);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="modal-close" onClick={handleClose} aria-label="Kapat" >✕</button>
        <img className="modal-image" src="/assets/images/modal/modal-car.png" alt="image" />
        <img className="modal-background" src="/assets/images/modal/modal-background.png" alt="background" />
        
        <div className="modal-car-model">EQS 450 4MATIC Inspiration</div>
        
        <div className="modal-car-info">
          <div className="info-content">
            <div className="info-item">
              <span className="info-value">265 kW</span>
              <span className="info-title">MOTOR GÜCÜ</span>
            </div>
            <div className="info-item">
              <span className="info-value">743 km</span>
              <span className="info-title">ELEKTRİKLİ MENZİL</span>
            </div>
            <div className="info-item">
              <span className="info-value">210 km/h</span>
              <span className="info-title">MAKSİMUM HIZ</span>
            </div>
            <div className="info-item">
              <span className="info-value">5,7 s</span>
              <span className="info-title">HIZLANMA (0-100 KM/H)</span>
            </div>
          </div>
          <button className="modal-button">EQS'yi Keşfedin</button>
        </div>

      </div>
    </div>
  );
};

export default ModalImage;
