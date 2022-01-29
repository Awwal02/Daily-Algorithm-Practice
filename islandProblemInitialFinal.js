/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    var nums = 0;
    const findifSiblingsOne = (ii,jj) => {
                    if(ii >= grid.length || jj <0 || ii< 0 || jj >= grid[ii].length || grid[ii][jj] === '0' || grid[ii][jj] === 'visited') return;
                    grid[ii][jj] = 'visited';
                    if(grid[ii+1] !== undefined) {
                        findifSiblingsOne(ii+1,jj)
                    }
                    findifSiblingsOne(ii-1,jj)
                    findifSiblingsOne(ii,jj-1)
                    findifSiblingsOne(ii,jj+1)
                    
                }
    for(let i=0;i<grid.length;i++) {
        for(let j=0;j<grid[i].length;j++) {
            if(grid[i][j] === "0" || grid[i][j] === 'visited') {
                continue;
            }
            else {
                findifSiblingsOne(i,j);
                nums++;
            }
        }
    }
    return nums;
};


