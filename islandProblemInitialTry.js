/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    var nums = 0;
    for(let i=0;i<grid.length;i++) {
        for(let j=0;j<grid[i].length;j++) {
            var el = grid[i][j];
            if(el === "0" || el === 'visited') {
                
                continue;
            }
            else {
                console.log("visited finding",i,j);
                
                var x = i;
                var y = j;
                const findifSiblingsOne = (ii,jj) => {
                    if(grid[ii+1] === undefined) return;
                    if(ii > grid.length -1 && jj > grid[i].length -1) return
                   if(grid[ii][jj] === '0' || grid[ii][jj] === 'visited') return;
                    
                    
                    grid[ii][jj] = 'visited';
                    return   findifSiblingsOne(ii+1,jj) || findifSiblingsOne(ii,jj+1)
                    
                }
                findifSiblingsOne(i,j);
                nums++;
            }
        }
    }
    return nums;
};
