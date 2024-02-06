import "./home.css";
import React, { useState, useEffect } from 'react';

function Home() {
    const [wordDataset, setWordDataset] = useState(null);
    const [currentRandomWordIndex, setCurrentRandomWordIndex] = useState(null);
    const [randomWord, setRandomWord] = useState('Click the button to generate a random GRE word');
    const [wordPOS, setWordPOS] = useState('Word part of speech will be displayed here');
    const [wordRoot, setWordRoot] = useState('Word root meaning will be displayed here');
    const [wordMeaning, setWordMeaning] = useState('Word meaning will be displayed here');
    const [wordExample, setWordExample] = useState('Word example will be displayed here');
    const [wordSynonym, setWordSynonym] = useState('Word synonym will be displayed here');
    const [wordAntonym, setWordAntonym] = useState('Word antonym will be displayed here');
    const [isFlipped, setFlipped] = useState(false);

    useEffect(() => {
        // Load the dataset when the component mounts
        loadDataset();
    }, []);

    const loadDataset = async () => {
        try {
            const response = await fetch('words.json'); // Adjust the path based on your project structure
            const data = await response.json();
            setWordDataset(data);
        } catch (error) {
        console.error('Error loading dataset:', error.message);
        }
    };

    const generateRandomWord = () => {
        if (!wordDataset) {
            console.error('Dataset not loaded');
            return;
        }

        // Get a random index from the dataset
        const randomIndex = Math.floor(Math.random() * wordDataset.length);

        // Get the word at the random index
        const randomWord = wordDataset[randomIndex].word;

        // Update the state
        setCurrentRandomWordIndex(randomIndex);
        setRandomWord(<div>Random GRE Word:<span className="neon-text"> {randomWord}</span></div>);
        setWordPOS('Word part of speech will be displayed here');
        setWordRoot('Word root meaning will be displayed here');
        setWordMeaning('Word meaning will be displayed here');
        setWordExample('Word example will be displayed here');
        setWordSynonym('Word synonym will be displayed here');
        setWordAntonym('Word antonym will be displayed here');
    };

    const displayWordPOS = () => {
        if (currentRandomWordIndex !== null) {
            const pos = wordDataset[currentRandomWordIndex].pos;
            setWordPOS(<div>Part of speech:<span className="blue-text"> {pos}</span></div>);
        } else {
            alert('No word generated yet');
        }
    };

    const displayWordRoot = () => {
        if (currentRandomWordIndex !== null) {
            const root = wordDataset[currentRandomWordIndex].root;
            setWordRoot(<div>Root:<span className="blue-text"> {root}</span></div>);
        } else {
            alert('No word generated yet');
        }
    };

    const displayWordMeaning = () => {
        if (currentRandomWordIndex !== null) {
            const meaning = wordDataset[currentRandomWordIndex].meaning;
            setWordMeaning(<div>Meaning:<span className="blue-text"> {meaning}</span></div>);
        } else {
            alert('No word generated yet');
        }
    };

    const displayWordExample = () => {
        if (currentRandomWordIndex !== null) {
            const example = wordDataset[currentRandomWordIndex].example;
            setWordExample(<div>Example:<span className="blue-text"> {example}</span></div>);
        } else {
            alert('No word generated yet');
        }
    };

    const displayWordSynonym = () => {
        if (currentRandomWordIndex !== null) {
        const synonym = wordDataset[currentRandomWordIndex].synonym;
        setWordSynonym(<div>Synonym:<span className="blue-text"> {synonym}</span></div>);
        } else {
        alert('No word generated yet');
        }
    };

    const displayWordAntonym = () => {
        if (currentRandomWordIndex !== null) {
            const antonym = wordDataset[currentRandomWordIndex].antonym;
            setWordAntonym(<div>Antonym:<span className="blue-text"> {antonym}</span></div>);
        } else {
            alert('No word generated yet');
        }
    };

    const handleFlip = () => {
        if (currentRandomWordIndex != null) {
            setFlipped(!isFlipped);
        }else {
            alert('No word generated yet');
        }
    };

    const handleClick = () => {
        handleFlip();
        generateRandomWord();
    };

  return (
    // <div>
    //     <h1>GRE Word Generator</h1>
    //     <p id="random-word">{randomWord}</p>
    //     <button onClick={generateRandomWord}>Generate Word</button>

    //     <p id="word-pos">{wordPOS}</p>
    //     <button onClick={displayWordPOS}>Show Part of Speech</button>

    //     <p id="word-root">{wordRoot}</p>
    //     <button onClick={displayWordRoot}>Show Root Meaning</button>

    //     <p id="word-meaning">{wordMeaning}</p>
    //     <button onClick={displayWordMeaning}>Show Meaning</button>

    //     <p id="word-example">{wordExample}</p>
    //     <button onClick={displayWordExample}>Show Example</button>

    //     <p id="word-synonym">{wordSynonym}</p>
    //     <button onClick={displayWordSynonym}>Show Synonyms</button>

    //     <p id="word-antonym">{wordAntonym}</p>
    //     <button onClick={displayWordAntonym}>Show Antonym</button>

    //     <p>Copyright © 2023 BabaGREWords.com, Inc. • All Rights Reserved</p>

    // </div>

    <div className="App">
        <h1 className="geeks">GRE Word Generator</h1>
        <div className="container">
            <div
                className={`flip-card ${
                    isFlipped ? "flipped" : ""
                }`}
            >
                <div className="flip-card-inner">
                    <div className="flip-card-front">

                        <div className="block">
                            <p id="random-word">{randomWord}</p>
                            <button onClick={generateRandomWord}>Generate Word</button>
                        </div>

                        <div className="block">
                            <p id="word-pos">{wordPOS}</p>
                            <button onClick={displayWordPOS}>Show Part of Speech</button>
                        </div>

                        <div className="block">
                            <p id="word-root">{wordRoot}</p>
                            <button onClick={displayWordRoot}>Show Root Meaning</button>
                        </div>

                        <div className="block">
                            <button
                                className="flip-button"
                                onClick={handleFlip}
                            >
                                View Meaning
                            </button>
                        </div>
                        
                    </div>
                    <div className="flip-card-back">

                        <div className="block">
                            <p id="word-meaning">{wordMeaning}</p>
                            <button onClick={displayWordMeaning}>Show Meaning</button>
                        </div>

                        <div className="block">
                            <p id="word-example">{wordExample}</p>
                            <button onClick={displayWordExample}>Show Example</button>
                        </div>

                        <div className="block">
                            <p id="word-synonym">{wordSynonym}</p>
                            <button onClick={displayWordSynonym}>Show Synonyms</button>
                        </div>

                        <div className="block">
                            <p id="word-antonym">{wordAntonym}</p>
                            <button onClick={displayWordAntonym}>Show Antonym</button>
                        </div>

                        <div className="block">
                            <button
                                className="flip-button"
                                onClick={handleClick}
                            >
                                Next Word
                            </button>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
        <p>Copyright © 2023 BabaGREWords.com, Inc. • All Rights Reserved</p>
    </div>
  )
}

export default Home;
 
    
        