import QuoteList from '../quotes/QuoteList'

const DUMMY_QUOTES = [
    {
        id: 'q1',
        author: 'Kurt Vonnegut',
        text: "Hello Babies. Welcome to Earth. It's hot in the summer and cold in the winter. It's round and wet and crowded. On the outside, babies, you've got a hundred years here. There's only one rule that I know of, babies-'God damn it, you've got to be kind.'"
    },
    {
        id: 'q2',
        author: 'Haruki Murakami',
        text: "Silence, I discover, is something you can actually hear."
    },
    {
        id: 'q3',
        author: 'Ulysses S. Grant',
        text: "Cheap cigars come in handy; they stifle the odor of cheap politicians"
    },
    {
        id: 'q4',
        author: 'Francois-Marie Arouet, aka Voltaire',
        text: "The true triumph of reason is that it enables us to get along with those who do not possess it."
    }
]

const AllQuotes = () => {
    return (
        <QuoteList quotes={DUMMY_QUOTES}/>
    );
};

export default AllQuotes;