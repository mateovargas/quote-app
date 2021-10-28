import { useParams, Route } from 'react-router-dom';
import { Fragment } from 'react';
import Comments from '../comments/Comments';
import HighlightedQuote from '../quotes/HighlightedQuote';

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
];

const QuoteDetail = () => {
    const params = useParams();
    const quote = DUMMY_QUOTES.find(quote => quote.id === params.quoteId);
    if(!quote){
        return <p>No quote found!</p>;
    }

    return (
        <Fragment>
            <HighlightedQuote text={quote.text} auhtor={quote.author}/>
            <Route path={`/quotes/${params.quoteId}/comments`}>
                <Comments />
            </Route>
        </Fragment>
    );
};

export default QuoteDetail;