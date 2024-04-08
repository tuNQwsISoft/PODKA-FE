import React, { useContext } from 'react';
import './styles.css';
import ReactDOM from 'react-dom';
import { IconClose, IconDangerous, IconInfo, IconWarning } from '../../icons';
import groupClass from '../../utils/ClassNameUtil';
import { GlobalContext } from '../../contexts/Global/GlobalContext';
import { GlobalSetPopup } from '../../contexts/Global/GlobalAction';
import { popupTarget } from '../../constants';
import ButtonComponent from '../Button/ButtonComponent';

const PopupComponent = () => {
    const { popup, dispatch } = useContext(GlobalContext);

    const handleConfirm = () => {
        dispatch(GlobalSetPopup({ show: false }));
        popup.onConfirm?.();
    };
    const handleCancel = () => {
        dispatch(GlobalSetPopup({ show: false }));
        popup.onCancel?.();
    };
    if (!popup.show || popup.target !== popupTarget.common) return null;
    return ReactDOM.createPortal(
        <div className="popup-component">
            <div className="popup-container">
                <div className="popup-header">
                    <h3 className="popup-header-label">{popup.header}</h3>
                    <div className="popup-header-close" onClick={handleCancel}>
                        <IconClose className="popup-header-close-icon h-5 w-5" />
                    </div>
                </div>
                <div className="popup-body">
                    <div className="popup-body-type">
                        <div className="popup-body-type-icon">
                            {popup.type === 'error' ? (
                                <IconDangerous
                                    className={groupClass(
                                        popup.type,
                                        'popup-body-type-icon'
                                    )}
                                />
                            ) : popup.type === 'warning' ? (
                                <IconWarning
                                    className={groupClass(
                                        popup.type,
                                        'popup-body-type-icon'
                                    )}
                                />
                            ) : popup.type === 'info' ? (
                                <IconInfo
                                    className={groupClass(
                                        popup.type,
                                        'popup-body-type-icon'
                                    )}
                                />
                            ) : null}
                        </div>
                        <p className="popup-confirm-message">
                            {popup.confirmMessage}
                        </p>
                    </div>
                    {popup.message ? (
                        // <div className="popup-message-wrapper">
                        <p className="popup-message">* {popup.message}</p>
                    ) : // </div>
                    null}
                </div>
                <div className="popup-footer">
                    {popup.type === 'warning' ? (
                        <ButtonComponent
                            label="Cancel"
                            className="popup-button bg-slate-700 shadow-2x2"
                            onClick={handleCancel}
                            autoFocus
                        />
                    ) : null}
                    <ButtonComponent
                        label={popup.type === 'warning' ? 'Confirm' : 'OK'}
                        className={groupClass('popup-button shadow-2x2', {
                            'bg-[#F05252]': popup.type === 'warning',
                            'bg-slate-700': popup.type !== 'warning',
                        })}
                        onClick={handleConfirm}
                        autoFocus={popup.type !== 'warning'}
                    />
                </div>
            </div>
        </div>,
        document.body
    );
};

export default PopupComponent;
