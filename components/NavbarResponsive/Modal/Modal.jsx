import React from 'react'
import styles from './Modal.module.css'
import Image from 'next/image'

const Modal = ({onClose, item}) => {
    
    return (
        <div className={styles.modalBg}>
            <div className={styles.modal}>
                <div className={styles.modalContent}>
                    <div className={styles.services_iconBx}>
                                        <Image src={item.src} width={70} height={70}/>
                                        <h2 className={styles.services_h2}>{item.name}</h2>
                                        <p className={styles.services_descrption} >{item.description}</p>
                                </div>
                        <p className={styles.modalText}>{item.description2}</p>
                    </div>
                    {/* <div className={styles.modalBtnContent}> */}
                    <div>
                    {/* </div> */}
                        <button className={styles.modalBtn} onClick={onClose}>
                            <Image src="/assets/close.png" alt="icon" width={30} height={30} />
                        </button>
                </div>
            </div>
        </div>
    )
  }

export default Modal



