module.exports = Helpers = {
    range:             (max)   => {Array.from({length: max}, (_, key) => key)},
    rand_tag:          (list)  => {list[Math.floor(Math.random()*list.length)]},
    pass_percentage:   (p)     => {Math.random() > (1- p/100)},
    sleep:             (ms)    => {new Promise(resolve => setTimeout(resolve, ms))}
};
