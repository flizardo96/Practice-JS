class DefaultMap extends Map {
  constructor() {
    super();
  }
  get(key) {
    if (this.has(key)) {
      return super.get(key);
    } else {
      return 0;
    }
  }
  // TODO: USE A DIFERENT TYPE OF LOOP
}
class Histogram {
  constructor() {
    this.letterCount = new DefaultMap();
    this.totalLetters = 0;
  }

  add(text) {
    text = text.replace(/\s/g, "").toUpperCase();

    for (let character of text) {
      let count = this.letterCount.get(character);
      if ((count = 0)) {
      }
      this.letterCount.set(character, count++);
      this.totalLetters++;
    }
  }

  toString() {
    let entries = [...this.letterCount];
    entries.sort((a, b) => {
      if (a[1] === b[1]) {
        return a[0] < b[0] ? -1 : 1;
      } else {
        return b[1] - a[1];
      }
    });
    for (let entry of entries) {
      entry[1] = (entry[1] / this.totalLetters) * 100;
    }
    entries = entries.filter((entry) => entry[1]);
    let lines = entries.map(
      ([l, n]) => `${l} ${"#".repeat(Math.round(n))} ${n.toFixed(2)}%`
    );
    return lines.join("\n");
  }
}

async function histogramFromStdin() {
  process.stdin.setEncoding("utf-8");
  let histogram = new Histogram();
  for await (let chunk of process.stdin) {
    histogram.add(chunk);
    console.log(histogram.toString());
  }
}

histogramFromStdin();
