#Ajouter dans le back les Endpoints
`@PostMapping("/Articles/add")
public void addFriend(@RequestBody Articles article){
    ArticlesService.save(Articles);
}`

`
@PutMapping("/Articles/{id}/edit")
public void editArticles(@PathVariable("id") Integer id, @RequestBody Articles articles) {
    ArticlesService.save(articles);
}`

`
@DeleteMapping("/Articles/{id}/delete")
public void deleteArticles(@PathVariable("id") Integer id){
    ArticlesService.delete(id);
}
`
