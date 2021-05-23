function createAnimal(name, function_name,sound)
{
    const animal = {
        name,
        [function_name]()
        {
            return sound
        }
    }
    return animal;
}
const d = createAnimal("dog", "bark", "Woooof!")
d.bark() //"Woooof!"
const s = createAnimal("sheep", "bleet", "BAAAAaaaa")
s.bleet() //"BAAAAaaaa"
