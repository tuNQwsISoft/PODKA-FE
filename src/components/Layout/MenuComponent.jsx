import React from 'react';
import { Menu } from '../../constants';
import { NavLink } from 'react-router-dom';
import groupClass from '../../utils/ClassNameUtil';
import './styles.css';

const MenuComponent = () => {
    // const [expandTarget, setExpandTarget] = useState('');
    const handleSelectMenu = (e, menu) => {
        if (menu.children?.length > 0) {
            e.preventDefault();
            // setExpandTarget((prev) => (prev === menu.title ? '' : menu.title));
        } else {
            // setExpandTarget('');
        }
    };

    return (
        <nav className="flex gap-40 items-center justify-center h-14">
            {Menu.map((item) => {
                return (
                    <div key={item.title} className={'menu-container'}>
                        <NavLink
                            key={item.title}
                            className={(active) =>
                                groupClass('menu-item', {
                                    highlight: active,
                                })
                            }
                            to={item.path}
                            onClick={(e) => handleSelectMenu(e, item)}
                        >
                            {item.icon}
                        </NavLink>
                    </div>
                );
            })}
        </nav>
    );
};

export default MenuComponent;
