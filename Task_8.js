let courses = new Map();

courses.set ("SkillFactory", "nice");
courses.set ("SkillBox", "so so");
courses.set ("Yandex", "not very");

for (let key of courses.keys()) {
  console.log(`Key - ${key}, value - ${courses.get(key)}`);
}