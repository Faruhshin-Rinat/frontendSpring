import { useState } from 'react';

const INITIAL_FILTERS = {
    nickname: '',
    role: '',
    country: '',
    team: '',
    mvp_from: '',
    mvp_to: '',
    rating_from: '',
    rating_to: '',
};

const Filter = (props) => {
    const { fullData, filtering, onReset, onClear } = props;
    const [filters, setFilters] = useState(INITIAL_FILTERS);

    const roles = [...new Set(fullData.map(p => p['Роль']))].sort((a, b) =>
        a.localeCompare(b, 'ru', { sensitivity: 'base' }));
    const countries = [...new Set(fullData.map(p => p['Страна']))].sort((a, b) =>
        a.localeCompare(b, 'ru', { sensitivity: 'base' }));

    const handleChange = (e) => {
        setFilters(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = () => {
        const f = filters;
        const mvpFrom    = f.mvp_from    !== '' ? Number(f.mvp_from)    : -Infinity;
        const mvpTo      = f.mvp_to      !== '' ? Number(f.mvp_to)      :  Infinity;
        const ratingFrom = f.rating_from !== '' ? Number(f.rating_from) : -Infinity;
        const ratingTo   = f.rating_to   !== '' ? Number(f.rating_to)   :  Infinity;

        const result = fullData.filter(item =>
            item['Никнейм'].toLowerCase().includes(f.nickname.toLowerCase()) &&
            (f.role === '' || item['Роль'].toLowerCase() === f.role.toLowerCase()) &&
            (f.country === '' || item['Страна'].toLowerCase() === f.country.toLowerCase()) &&
            item['Команда'].toLowerCase().includes(f.team.toLowerCase()) &&
            item['Количество MVP'] >= mvpFrom && item['Количество MVP'] <= mvpTo &&
            item['Rating 3.0'] >= ratingFrom && item['Rating 3.0'] <= ratingTo
        );

        filtering(result);
        onReset();
    };

    const handleClear = () => {
        setFilters(INITIAL_FILTERS);
        filtering([...fullData]);
        onReset();
        onClear();
    };

    return (
        <details open>
            <summary><b>Фильтр</b></summary>
            <form id="filterForm">
                <label htmlFor="name">Никнейм:</label><br />
                <input type="text" id="name" name="nickname" value={filters.nickname} onChange={handleChange} /><br /><br />

                <label htmlFor="role">Роль:</label><br />
                <select id="role" name="role" value={filters.role} onChange={handleChange}>
                    <option value="">Все</option>
                    {roles.map(r => <option key={r} value={r}>{r}</option>)}
                </select><br /><br />

                <label htmlFor="country">Страна:</label><br />
                <select id="country" name="country" value={filters.country} onChange={handleChange}>
                    <option value="">Все</option>
                    {countries.map(c => <option key={c} value={c}>{c}</option>)}
                </select><br /><br />

                <label htmlFor="team">Команда:</label><br />
                <input type="text" id="team" name="team" value={filters.team} onChange={handleChange} /><br /><br />

                Количество MVP:<br />
                <label>от <input type="number" id="mvp_from" name="mvp_from" value={filters.mvp_from} onChange={handleChange} /></label>
                <label>до <input type="number" id="mvp_to" name="mvp_to" value={filters.mvp_to} onChange={handleChange} /></label><br /><br />

                Rating 3.0:<br />
                <label>от <input type="number" id="rating_from" name="rating_from" value={filters.rating_from} onChange={handleChange} step="0.01" /></label>
                <label>до <input type="number" id="rating_to" name="rating_to" value={filters.rating_to} onChange={handleChange} step="0.01" /></label><br /><br />

                <input type="button" id="findBtn" value="Найти" onClick={handleSubmit} />
                <input type="button" id="clearFilterBtn" value="Очистить фильтр" onClick={handleClear} />
            </form>
        </details>
    );
};

export default Filter;