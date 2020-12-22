import React from 'react';
import { Link } from 'react-router-dom';


const Policy = () => {
    return (
        <div className="app-content">
            <h1>Политика конфеденциальности</h1>
            <h2>Действует с декабря 2020 год</h2>
            <h2>Быстрое резюме</h2>
            <ul>
                <li>New Year Resolution (далее: веб-сайт) собирает только ту
информацию, которую вы указываете, не проверяя ее. </li>
                <li>Google Analytics используется, чтобы улучшить качество работы
веб-сайта. </li>
                <li>Веб-сайт использует Google AdSense, который использует кукифайлы. Использование рекламных куки-файлов компанией
                Google позволяет ей и ее партнерам показывать рекламу,
основанную на вашей предыдущей активности в Интернете. </li>
            </ul>

            <h2>Кто мы? </h2>
            <p>New Year Resolution принадлежит и управляется Безденежных
            Максимом (далее: мы). По любым вопросам пишите нам на
nyrproj@gmail.com. У нас нет корпоративного телефонного номера. </p>
            <h2>Какую персональную информацию мы собираем о вас? </h2>
            <p>Мы собираем информацию исключительно с ваших слов, а именно: </p>
            <ul>
                <li>Ваше имя</li>
                <li>Год рождения</li>
                <li>Страну нахождения/проживания</li>
            </ul>
            <h2>Используем ли мы куки-фалы? </h2>
            <p>Да, куки-файлы используются Google AdSense, чтобы улучшить
            качество показываемой рекламы. Google Analytics тоже использует
куки-файлы и помогает нам улучшить ваш опыт пользования вебсайтом. </p>
            <h2>Где хранится моя персональная информация?</h2>


            <p>Ваша персональная информация хранится с использованием
            платформы AWS от Amazon. Она хранится до тех пор, пока мы не
            скажете нам удалить ее, используя наш контактный адрес
электронной почты.</p>
            
<Link to="/" style={{ fontSize: 24, textAlign: 'center', width: '100%' }}>Вернуться на сайт</Link>

        </div>
    )
}
export default Policy;