function countBy(x, n) {
    let z = [];
      for(let i = 0; i < n; i++){
          z.push(x);
          x =x + z[0];
      }
      return z;
    }

  countBy(1, 10);