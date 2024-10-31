import { Card } from '../card/Card';
import s from './Catalog.module.css';
export function Catalog() {
    return (
        <section className={`container ${s.catalog}`}>
            <h2>Каталог</h2>
            <div className={s.cat}>
                <p>Категории:</p>
                <div className={s.btns}>
                    <buttton className='btn'>Все товары</buttton>
                    <buttton className='btn'>Шины/колеса</buttton>
                    <buttton className='btn'>Масла</buttton>
                    <buttton className='btn'>Ароматизаторы</buttton>
                </div>
            </div>
            <div className={s.cards}>
                <Card img='/card1.jpg' name='Очиститель стекол спрей' price='462'/>
                <Card img='/card2.jpg' name='Автошампунь с воском' price='355'/>
                <Card img='/card3.jpg' name='Замшевая губка' price='736'/>
                <Card img='/card4.jpg' name='Освежитель воздуха' price='321'/>
                <Card img='/card5.jpg' name='Освежитель воздуха "DragonFire"' price='345'/>
                <Card img='/card6.jpg' name='Держатель для телефона' price='432'/>
                <Card img='/card7.jpg' name='Домкрат 4т' price='1753'/>
                <Card img='/card8.jpg' name='Влажные салфетки для стекол и зеркал' price='513'/>
                <Card img='/card9.jpg' name='Влажные салфетки для салона' price='565'/>
            </div>
            <a href="#">Загрузить еще товары</a>
        </section>
    )
}