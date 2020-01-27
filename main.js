let gameBoard = [];
let cols = 4;
let rows = 4;
let tileLength = 50;
let movement = "stop";
let emptySpaces = [];
let inequal = false;
let move = "no";
let gameOver = 0;
let score = 0;
function setup()
{
  createCanvas(400,400);
  for(var i = 0;i < cols;i++)
  {
    gameBoard[i] = [];
    for(var j = 0;j < rows;j++)
    {
      gameBoard[i][j] = 0;
    }
  }

  gameBoard[2][3] = 2;
  gameBoard[1][0] = 2;
}

function draw()
{
  background(255);
	noStroke();

  //Draws the game board
  for(var i = 0;i < cols;i++)
  {
    for(var j = 0;j < rows;j++)
    {
      var x = (i * tileLength) + 100;
      var y = (j * tileLength) + 100;
      if(gameBoard[i][j] == 0)
      {
        fill(169);
        rect(x,y,tileLength,tileLength,15);
      }
      else if(gameBoard[i][j] == 2)
      {
        fill(255,0,0);
        rect(x,y,tileLength,tileLength,15);
        fill(255);
        textSize(32);
        text(2,x+25,y+35);
      }
      else if(gameBoard[i][j] == 4)
      {
        fill(255,80,0);
        rect(x,y,tileLength,tileLength,15);
        fill(255);
        textSize(32);
        text(4,x+25,y+35);
      }
			else if(gameBoard[i][j] == 8)
			{
				fill(255,160,0);
				rect(x,y,tileLength,tileLength,15);
        fill(255);
        textSize(32);
        text(8,x+25,y+35);
			}
			else if(gameBoard[i][j] == 16)
			{
				fill(255,240,0);
				rect(x,y,tileLength,tileLength,15);
        fill(255);
        textSize(32);
        text(16,x+25,y+35);
			}
			else if(gameBoard[i][j] == 32)
			{
				fill(160,255,0);
				rect(x,y,tileLength,tileLength,15);
        fill(255);
        textSize(32);
        text(32,x+25,y+35);
			}
			else if(gameBoard[i][j] == 64)
			{
				fill(80,255,0);
				rect(x,y,tileLength,tileLength,15);
        fill(255);
        textSize(32);
        text(64,x+25,y+35);
			}
			else if(gameBoard[i][j] == 128)
			{
				fill(0,255,0);
				rect(x,y,tileLength,tileLength,15);
        fill(255);
        textSize(28);
        text(128,x+25,y+35);
			}
      else if(gameBoard[i][j] == 256)
			{
				fill(0,160,80);
				rect(x,y,tileLength,tileLength,15);
        fill(255);
        textSize(28);
        text(256,x+25,y+35);
			}
      else if(gameBoard[i][j] == 512)
			{
				fill(0,80,160);
				rect(x,y,tileLength,tileLength,15);
        fill(255);
        textSize(28);
        text(512,x+25,y+35);
			}
      else if(gameBoard[i][j] == 1024)
			{
				fill(0,0,255);
				rect(x,y,tileLength,tileLength,15);
        fill(255);
        textSize(20);
        text(1024,x+25,y+30);
			}
      else if(gameBoard[i][j] == 2048)
			{
				fill(255,0,255);
				rect(x,y,tileLength,tileLength,15);
        fill(255);
        textSize(20);
        text(2048,x+25,y+30);
			}
      else if(gameBoard[i][j] == 4096)
			{
				fill(0);
				rect(x,y,tileLength,tileLength,15);
        fill(255);
        textSize(20);
        text(4096,x+25,y+30);
			}
      else if(gameBoard[i][j] == 8192)
			{
				fill(0);
				rect(x,y,tileLength,tileLength,15);
        fill(255);
        textSize(20);
        text(8192,x+25,y+30);
			}
      else if(gameBoard[i][j] == 16384)
			{
				fill(0);
				rect(x,y,tileLength,tileLength,15);
        fill(255);
        textSize(18);
        text(16384,x+25,y+30);
			}
      else if(gameBoard[i][j] == 32768)
			{
				fill(0);
				rect(x,y,tileLength,tileLength,15);
        fill(255);
        textSize(18);
        text(32798,x+25,y+30);
			}
      else if(gameBoard[i][j] == 65536)
			{
				fill(0);
				rect(x,y,tileLength,tileLength,15);
        fill(255);
        textSize(18);
        text(65536,x+25,y+30);
			}
      else if(gameBoard[i][j] == 131072)
			{
				fill(0);
				rect(x,y,tileLength,tileLength,15);
        fill(255);
        textSize(14);
        text(131072,x+25,y+30);
			}
    }
  }


  //Movements with the up, down, left, and right arrows
  if(movement === "up")
  {
    for(var i = 0;i < cols;i++)
    {
      for(var j = 0;j < rows;j++)
      {
        if(gameBoard[i][j] != 0)
        {
          //Statements for if the block above is 0 or blank
          if(j - 1 >= 0 && gameBoard[i][j-1] === 0)
          {
            gameBoard[i][j-1] = gameBoard[i][j];
            gameBoard[i][j] = 0;
						move = "yes";

          }
          if(j - 2 >= 0 && gameBoard[i][j-2] === 0)
          {
              gameBoard[i][j-2] = gameBoard[i][j-1];
              gameBoard[i][j-1] = 0;
							move = "yes";
          }
          if(j - 3 >= 0 && gameBoard[i][j-3] === 0)
          {
              gameBoard[i][j-3] = gameBoard[i][j-2];
              gameBoard[i][j-2] = 0;
							move = "yes";
          }
          //Statements for if the block above is equal to the block
          if(j - 1 >= 0 && gameBoard[i][j-1] === gameBoard[i][j])
          {
            gameBoard[i][j-1] = gameBoard[i][j] * 2;
            gameBoard[i][j] = 0;
            score += gameBoard[i][j-1];
						move = "yes";
          }
          if(j - 2 >= 0 && gameBoard[i][j-2] === gameBoard[i][j-1])
          {
            gameBoard[i][j-2] = gameBoard[i][j-1] * 2;
            gameBoard[i][j-1] = 0;
            score += gameBoard[i][j-2];
						move = "yes";
          }
          if(j - 3 >= 0 && gameBoard[i][j-3] === gameBoard[i][j-2])
          {
            gameBoard[i][j-3] = gameBoard[i][j-2] * 2;
            gameBoard[i][j-2] = 0;
            score += gameBoard[i][j-3];
						move = "yes";
          }
        }
      }
    }

		for(var k = 0;k < cols;k++)
		{
			for(var l = 0;l < rows;l++)
			{
				if(gameBoard[k][l] === 0)
				{
					emptySpaces.push(new Point(k,l));
				}
			}
		}

		if(move === "yes")
		{
      randomPoint = random(emptySpaces);
			let randomX = randomPoint.x;
			let randomY = randomPoint.y;
			gameBoard[randomX][randomY] = 2;
		}

  }
  if(movement === "down")
  {
    for(var i = cols - 1;i >= 0;i--)
    {
      for(var j = rows - 1; j >= 0;j--)
      {
        if(gameBoard[i][j] != 0)
        {
          //Statements for if the block below is 0 or blank
          if(j + 1 < rows && gameBoard[i][j+1] === 0)
          {
            gameBoard[i][j+1] = gameBoard[i][j];
            gameBoard[i][j] = 0;
            move = "yes";
          }
          if(j + 2 < rows && gameBoard[i][j+2] === 0)
          {
              gameBoard[i][j+2] = gameBoard[i][j+1];
              gameBoard[i][j+1] = 0;
              move = "yes";
          }
          if(j + 3 < rows && gameBoard[i][j+3] === 0)
          {
              gameBoard[i][j+3] = gameBoard[i][j+2];
              gameBoard[i][j+2] = 0;
              move = "yes";
          }
          //Statements for if the block below is equal to the block
          if(j + 1 < rows && gameBoard[i][j+1] === gameBoard[i][j])
          {
            gameBoard[i][j+1] = gameBoard[i][j] * 2;
            gameBoard[i][j] = 0;
            score += gameBoard[i][j+1];
            move = "yes"
          }
          if(j + 2 < rows && gameBoard[i][j+2] === gameBoard[i][j+1])
          {
            gameBoard[i][j+2] = gameBoard[i][j+1] * 2;
            gameBoard[i][j+1] = 0;
            score += gameBoard[i][j+2];
            move = "yes"
          }
          if(j + 3 < rows && gameBoard[i][j+3] === gameBoard[i][j+2])
          {
            gameBoard[i][j+3] = gameBoard[i][j+2] * 2;
            gameBoard[i][j+2] = 0;
            score += gameBoard[i][j+3];
            move = "yes"
          }
        }
      }
    }
    for(var k = 0;k < cols;k++)
		{
			for(var l = 0;l < rows;l++)
			{
				if(gameBoard[k][l] === 0)
				{
					emptySpaces.push(new Point(k,l));
				}
			}
		}

		if(move === "yes")
		{
      randomPoint = random(emptySpaces);
			let randomX = randomPoint.x;
			let randomY = randomPoint.y;
			gameBoard[randomX][randomY] = 2;
		}
  }
  if(movement == "left")
  {
    for(var i = 0;i < rows;i++)
    {
      for(var j = 0;j < cols;j++)
      {
        if(gameBoard[j][i] != 0)
        {
          //Statements for if the block to the left is 0 or blank
          if(j - 1 >= 0 && gameBoard[j-1][i] === 0)
          {
            gameBoard[j-1][i] = gameBoard[j][i];
            gameBoard[j][i] = 0;
            move = "yes";
          }
          if(j - 2 >= 0 && gameBoard[j-2][i] === 0)
          {
              gameBoard[j-2][i] = gameBoard[j-1][i];
              gameBoard[j-1][i] = 0;
              move = "yes";
          }
          if(j - 3 >= 0 && gameBoard[j-3][i] === 0)
          {
              gameBoard[j-3][i] = gameBoard[j-2][i];
              gameBoard[j-2][i] = 0;
              move = "yes";
          }
          //Statements for if the block to the left is equal to the block
          if(j - 1 >= 0 && gameBoard[j-1][i] === gameBoard[j][i])
          {
            gameBoard[j-1][i] = gameBoard[j][i] * 2;
            gameBoard[j][i] = 0;
            score += gameBoard[j-1][i];
            move = "yes";
          }
          if(j - 2 >= 0 && gameBoard[j-2][i] === gameBoard[j-1][i])
          {
            gameBoard[j-2][i] = gameBoard[j-1][i] * 2;
            gameBoard[j-1][i] = 0;
            score += gameBoard[j-2][i];
            move = "yes";
          }
          if(j - 3 >= 0 && gameBoard[j-3][i] === gameBoard[j-2][i])
          {
            gameBoard[j-3][i] = gameBoard[j-2][i] * 2;
            gameBoard[j-2][i] = 0;
            score += gameBoard[j-3][i];
            move = "yes";
          }
        }
      }
    }
    for(var k = 0;k < cols;k++)
		{
			for(var l = 0;l < rows;l++)
			{
				if(gameBoard[k][l] === 0)
				{
					emptySpaces.push(new Point(k,l));
				}
			}
		}

		if(move === "yes")
		{
      randomPoint = random(emptySpaces);
			let randomX = randomPoint.x;
			let randomY = randomPoint.y;
			gameBoard[randomX][randomY] = 2;
		}
  }
  if(movement == "right")
  {
    for(var i = rows - 1;i >= 0;i--)
    {
      for(var j = cols - 1;j >= 0;j--)
      {
        if(gameBoard[j][i] != 0)
        {
          //Statements for if the block to the right is 0 or blank
          if(j + 1 < cols && gameBoard[j+1][i] === 0)
          {
            gameBoard[j+1][i] = gameBoard[j][i];
            gameBoard[j][i] = 0;
            move = "yes";
          }
          if(j + 2 < cols && gameBoard[j+2][i] === 0)
          {
              gameBoard[j+2][i] = gameBoard[j+1][i];
              gameBoard[j+1][i] = 0;
              move = "yes";
          }
          if(j + 3 < cols && gameBoard[j+3][i] === 0)
          {
              gameBoard[j+3][i] = gameBoard[j+2][i];
              gameBoard[j+2][i] = 0;
              move = "yes";
          }
          //Statements for if the block to the right is equal to the block
          if(j + 1 < cols && gameBoard[j+1][i] === gameBoard[j][i])
          {
            gameBoard[j+1][i] = gameBoard[j][i] * 2;
            gameBoard[j][i] = 0;
            score += gameBoard[j+1][i];
            move = "yes";
          }
          if(j + 2 < cols && gameBoard[j+2][i] === gameBoard[j+1][i])
          {
            gameBoard[j+2][i] = gameBoard[j+1][i] * 2;
            gameBoard[j+1][i] = 0;
            score += gameBoard[j+2][i];
            move = "yes";
          }
          if(j + 3 < cols && gameBoard[j+3][i] === gameBoard[j+2][i])
          {
            gameBoard[j+3][i] = gameBoard[j+2][i] * 2;
            gameBoard[j+2][i] = 0;
            score += gameBoard[j+3][i];
            move = "yes";
          }
        }
      }
    }
    for(var k = 0;k < cols;k++)
		{
			for(var l = 0;l < rows;l++)
			{
				if(gameBoard[k][l] === 0)
				{
					emptySpaces.push(new Point(k,l));
				}
			}
		}

		if(move === "yes")
		{
      randomPoint = random(emptySpaces);
			let randomX = randomPoint.x;
			let randomY = randomPoint.y;
			gameBoard[randomX][randomY] = 2;
		}
  }

textSize(32);
fill(0);
textAlign(CENTER);
text("Score: " + score,width/2,height - 50);
  //Tests for a game over
  for(var i = 0;i < cols;i++)
  {
    for(var j = 0;j < rows;j++)
    {
      if(gameBoard[i][j] != 0)
      {
        if(j - 1 >= 0 && gameBoard[i][j] != gameBoard[i][j-1])
        {
          gameOver++;
        }

        if(j + 1 < rows && gameBoard[i][j] != gameBoard[i][j+1])
        {
          gameOver++;
        }

        if(i - 1 >= 0 && gameBoard[i][j] != gameBoard[i-1][j])
        {
          gameOver++;
        }

        if(i + 1 < cols && gameBoard[i][j] != gameBoard[i+1][j])
        {
          gameOver++;
        }
      }
    }
  }
  if(gameOver >= 48)
  {
    fill(0);
    textSize(20);
    textAlign(CENTER);
    text("Would you like to play again?",width/2,height/8);
    text("Refresh the page",width/2,(height/8) + 30);
  }
  else
  {
    movement = "stop";
  	move = "no";
  	emptySpaces = [];
    gameOver = 0;
  }
}
function keyPressed()
{
	//arrow movements
  if(keyCode === UP_ARROW)
  {
    movement = "up";
  }
  else if(keyCode === DOWN_ARROW)
  {
    movement = "down";
  }
  else if(keyCode === LEFT_ARROW)
  {
    movement = "left";
  }
  else if(keyCode === RIGHT_ARROW)
  {
    movement = "right";
  }
}
