AFRAME.registerComponent("comic", {
    init: function(){
        this.comicContainer = this.el
        this.createCards()
    },
    createCards: function(){
        const thumbnailsRef = [
            {
                id: "captain-america",
                url: "Assets/thumbnails/CaptainAmerica.jpg",
            },
            {
                id: "ironman",
                url: "Assets/thumbnails/Ironman.jpg",
            },
            {  
                id: "spiderman",
                url: "Assets/thumbnails/Spiderman.jpg",
            },
            {
                id: "wolverine",
                url: "Assets/thumbnails/Wolverine.jpg",
            }
        ];
        let previousXPosition = -54.9;

        for (var item of thumbnailsRef){
            const posX = previousXPosition + 22;
            const posY = 0;
            const posZ = -30;
            const position = { x: posX, y: posY, z: posZ};
            previousXPosition = posX

            var borderEl = this.createBorder(position, item.id)

            var thumbnailEl = this.createThumbnail(item)
            borderEl.appendChild(thumbnailEl)

            this.comicContainer.appendChild(borderEl)
        }

    },
    createBorder: function(position, id){
        var border_el = document.createElement("a-entity")
        border_el.setAttribute("id", id)
        border_el.setAttribute("visible", true)
        border_el.setAttribute("position", position)
        border_el.setAttribute("geometry", {primitive: "box", width: 15, height: 25, depth: 0.1})
        border_el.setAttribute("material", {color: "white", opacity: 1})

        border_el.setAttribute("cursor-listener", {})
        return border_el
    },
    createThumbnail: function(item){
        var thumbnail_el = document.createElement("a-entity")
        thumbnail_el.setAttribute("visible", true)
        thumbnail_el.setAttribute("geometry", {primitive: "box", width: 14, height: 24, depth: 0.2})
        thumbnail_el.setAttribute("material", {src: item.url})
        return thumbnail_el
    }
})