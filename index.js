const program = require('commander');

const cuimhnigh = function(deck) {
    if (deck) {
        process.stdout.write(deck + '\n');
    } else {
        process.stdout.write('no deck\n');
    }
};

program
    .version('1.0.0', '-v, --version')
    .option('-d, --deck <deck file>', 'a flashcard deck')
    .action(function(...args) {
        const cmd = args[args.length - 1];
        cuimhnigh(cmd.deck);
    })
    .parse(process.argv);
