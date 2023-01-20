import "./SectionFour.style.scss";

import { doc, getDoc } from "firebase/firestore";

import CARD_IMAGES from "../assets/s4/data/CARD_IMAGES";
import SingleCard from "../components/s4components/SingleCard";
import Scoreboard from "../components/s4components/Scoreboard";
import LoginForm from "../components/s4components/LoginForm";
import SignupForm from "../components/s4components/SignupForm";

import { useAuthContext } from "../hooks/useAuthContext";
import { useLogout } from "../hooks/useLogout";
import { useUpdateScore } from "../hooks/useUpdateScore";
import { db } from "../firebase/configFirebase";

import { useEffect, useState } from "react";

// THIS CODE IS INSPIRED BY SHAUN PELLING (THE NET NINJA) UDEMY COURSE
const SectionFour = () => {
  const [cards, setCards] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [isLoginFormOn, setIsLoginFormOn] = useState(false);
  const [isSignupFormOn, setIsSignupFormOn] = useState(false);
  const [isScoreImported, setIsScoreImported] = useState(false);

  const { logout } = useLogout();
  const { updateScore } = useUpdateScore();
  const { user } = useAuthContext();

  useEffect(() => {
    if (user) {
      getDbScore();
    }
  }, [user]);

  // update score on Db when score changes
  useEffect(() => {
    if (user && isScoreImported) {
      updateScore(currentScore, user.displayName);
    }
  }, [currentScore]);

  // get score from database when user logs in and update current score
  const getDbScore = async () => {
    const userRef = doc(db, "players", user.displayName);
    const userData = await getDoc(userRef);

    if (userData.exists()) {
      if (currentScore > userData.data().score) {
        updateScore(currentScore, user.displayName);
      } else {
        setCurrentScore(userData.data().score);
      }
      setIsScoreImported(true);
    } else {
      console.log("No document found");
    }
  };

  // handle SignOut
  const handleLogout = () => {
    logout();
    setIsLoginFormOn(false);
    setIsSignupFormOn(false);
  };

  //shuffle cards
  const shuffleCards = () => {
    const shuffledCards = [...CARD_IMAGES, ...CARD_IMAGES] //multiply each card
      .sort(() => Math.random() - 0.5) // sort cards in random order
      .map((card) => ({ ...card, id: Math.random() })); // adding unique id

    setCards(shuffledCards);
  };

  // handle a choice
  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  // compare 2 selected cards
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);
      if (choiceOne.img === choiceTwo.img) {
        setTimeout(() => {
          setCurrentScore((prevScore) => {
            return prevScore + 10;
          });
        }, 1000);

        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.img === choiceOne.img) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        resetTurn();
      } else {
        setTimeout(() => {
          resetTurn();
          setCurrentScore((prevScore) => {
            return prevScore - 1;
          });
        }, 1000);
      }
    }
  }, [choiceOne, choiceTwo]);

  // reset choices & increase turn
  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setDisabled(false);
  };

  useEffect(() => {
    shuffleCards();
  }, []);

  return (
    <div className="container s4" id="play">
      {isLoginFormOn && !user ? (
        <LoginForm
          setIsLoginFormOn={setIsLoginFormOn}
          setCurrentScore={setCurrentScore}
        />
      ) : (
        ""
      )}
      {isSignupFormOn && !user ? (
        <SignupForm setIsSignupFormOn={setIsSignupFormOn} />
      ) : (
        ""
      )}
      <div className="scoreboard">
        <Scoreboard />
        <div className="log-sign-buttons">
          {!user && (
            <button
              onClick={() => {
                setIsLoginFormOn(true);
              }}
            >
              Login
            </button>
          )}
          {!user && (
            <button
              onClick={() => {
                setIsSignupFormOn(true);
              }}
            >
              Signup
            </button>
          )}
          {user && (
            <button
              onClick={() => {
                handleLogout();
              }}
            >
              Logout
            </button>
          )}
        </div>
        <p>
          Playing as <span> {user ? user.displayName : "guest"}</span>
        </p>
      </div>
      <div className="game">
        <button onClick={shuffleCards}>Play again</button>
        <p>Your current score: {currentScore}</p>
        <div className="card-grid">
          {cards.map((card) => (
            <SingleCard
              card={card}
              key={card.id}
              handleChoice={handleChoice}
              flipped={card === choiceOne || card === choiceTwo || card.matched}
              disabled={disabled}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionFour;
