import React, { useContext, useState } from 'react'
import { BookContext } from '../contexts/BookContext'
import { ThemeContext } from '../contexts/ThemeContext';

const BookForm = () => {
    const {addBook} = useContext(BookContext);
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;
    const [title, setTitle] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        addBook(title);
        setTitle('');
    }
    return (
        <form className="book-form" onSubmit={handleSubmit} style={{ background: theme.bg, color: theme.syntax }}>
            <input type="text" required value={title} onChange={(e) => setTitle(e.target.value)} style={{background: theme.ui, color: theme.syntax}} />
            <input type="submit" />
        </form>
    )
}

export default BookForm
