     const score = JSON.parse(localStorage.getItem('score')) || {
      wins: 0,
      losses: 0,
      tie: 0
    };

    updateScoreElement();

      function playGame(playerMove) {
        const computerMove = pickcomputerMove();
            let result='';
            if(playerMove === 'scissors'){
      if (computerMove === 'Rock' ){
        result = 'You lose.';
      }else if (computerMove === 'Paper'){
        result = 'You won.';
      }else if(computerMove === 'scissors'){
        result = 'Tie.';
      }
    }
     
      else if (playerMove === 'Rock') {
        if (computerMove === 'Rock') {
          result = 'Tie.';
        } else if (computerMove === 'Paper') {
          result = 'You lose.';
        } else if (computerMove === 'scissors') {
          result = 'You win.';
        }
      

      }
      else if (playerMove === 'Paper') {
        if (computerMove === 'Rock') {
          result = 'You win.';
        } else if (computerMove === 'Paper') {
          result = 'Tie.';
        } else if (computerMove === 'scissors') {
          result = 'You lose.';
        }
        
      }
      if (result === 'You win.') {
        score.wins += 1;
      }else if (result === 'You lose.'){
        score.losses += 1;
      }else if (result === 'Tie.') {
        score.tie += 1 ;
      }
      
      localStorage.setItem('score' , JSON.stringify(score)) ;

      updateScoreElement();

      document.querySelector('.js-result').innerHTML = result;

      document.querySelector('.js-moves').innerHTML = ` you picked
      <img class="emoji" src="./${playerMove}-emoji.png" alt="img">
      <img class="emoji" src="./${computerMove}-emoji.png" alt="img">
      computer picked `;

    }  
  

    function updateScoreElement() {
        document.querySelector('.js-score')
          .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.tie}`;

      }



      function pickcomputerMove() {
      const randomNumber = Math.random();

      let computerMove = '' ;

      if (randomNumber >=0 && randomNumber < 1/3 ) {
      computerMove = 'Rock' ;
      
      }
      else if(randomNumber >=1/3 && randomNumber < 2/3){
      computerMove ='Paper';
      }
      else if (randomNumber >=2/3 && randomNumber < 1) {
      computerMove = 'scissors';
      }
      
      return computerMove;

      } 
