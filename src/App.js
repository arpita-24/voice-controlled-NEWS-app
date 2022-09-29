import React, { useState, useEffect } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import NewsCards from "./components/NewsCards/NewsCards";
import wordsToNumbers from "words-to-numbers";

import useStyles from "./styles";
// import alanLogo from './assets/NewsHeader2.jpg';
const alanKey = "4d9aae019e0a5207c85516ac11c9fbd22e956eca572e1d8b807a3e2338fdd0dc/stage";
const App = () => {
    const classes = useStyles();
    const [newsArticles, setNewsArticles] = useState([]);

    const [activeArticle, setActiveArticle] = useState(-1);
    useEffect(() => {
        alanBtn({
            key: alanKey,
            onCommand: ({ command, articles, number }) => {
                if (command === "newHeadlines") {
                    setNewsArticles(articles);
                    setActiveArticle(-1);
                } else if (command === 'highlight')
                {
                    setActiveArticle((prevActiveArticle) => prevActiveArticle + 1);
                } else if(command === 'open'){
                    
                    const parsedNumber = number.length > 2 ? wordsToNumbers(number, { fuzzy: true }) : number;
                    console.log(parsedNumber);
                    const article = articles[parsedNumber - 1];
                    console.log(article.url);
                    if(article){
                        console.log('inside');
                        window.open(article.url,'_blank');
                        
                    }
                }
            },
        })
    }, []);
    return(
        <div className={classes.mainBg}>
            <div className={classes.logoContainer}>
                <h1>NEWS READER</h1>
            </div>
            <NewsCards articles={newsArticles} activeArticle= {activeArticle} />
        </div>
    )
}

export default App;