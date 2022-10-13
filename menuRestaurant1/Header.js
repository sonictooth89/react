const Header = (props) => {

    const activeItems = props.items.filter(item => item.active === true);
    const number = activeItems.length
    return (
        <header>
            <h2>Wielkosc zamowienia: {number}</h2>
            <h2>Do zaplaty: {number ? `${number * 12.39} zlotych` : 'nie kupujesz, to nie placisz'}</h2>
        </header>
    )
}