import React from "react";

import DateIntervalPicker from './DateIntervalPicker/DateIntervalPicker.jsx';

import '../../css/menu.less';

/**
Menu component - isn't really necessary component, but it's needed for
DateIntervalPicker's environment
 */
export default class Menu extends React.Component {
    /**
     * Draws the menu like vk.com/search where the DateIntervalPicker component is located
     *
     * @returns {XML}
     */
    render() {
        return (
            <div className={'menu'}>
                <div className={'menu__title'}>
                    Сортировка
                </div>
                <div className={'menu__container--normal'}>
                    По популярности
                </div>
                <div className={'menu__title'}>
                    Регион
                </div>
                <div className={'menu__container--normal'}>
                    Выбор страны
                </div>
                <div className={'menu__title'}>
                    Школа
                </div>
                <div className={'menu__title'}>
                    Временной интервал
                </div>
                <DateIntervalPicker/>
                <div className={'menu__title'}>
                    Университет
                </div>
                <div className={'menu__title'}>
                    Возраст
                </div>
                <div className={'menu__wrapper'}>
                    <div className={'menu__container--small'}>
                        От
                    </div>
                    <div className={'menu__range-sep'}>
                        &ndash;
                    </div>
                    <div className={'menu__container--small'}>
                        До
                    </div>
                </div>
                <div className={'menu__title'}>
                    Пол
                </div>
                <div className={'menu__sex-selection'}>
                    <input type="radio" name="sex" defaultChecked={true}/> Женский
                    <div/>
                    <input type="radio" name="sex"/> Мужской
                    <div/>
                    <input type="radio" name="sex"/> Любой
                </div>
            </div>
        );
    }
}