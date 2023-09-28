AFRAME.registerComponent("cursor-listener", {
    schema: {
        selectedItemId: {default: "", type: "string"},
    },
    init: function(){
        this.handleMouseEnterEvents();
        this.handleMouseLeaveEvents();
    },

    handleComicsListState: function(){
        var id = this.el.getAttribute("id")
        var comics_id = ["captain-america", "ironman", "spiderman", "wolverine"]
        if (comics_id.includes(id)){
            var comic_container = document.querySelector("#comic-container")
            comic_container.setAttribute("cursor-listener", {selectedItemId: id})
            this.el.setAttribute("material", {color: "#0866ff", opacity: 1})
        }
    },

    handleMouseEnterEvents: function(){
        this.el.addEventListener("mouseenter", ()=>{
            this.handleComicsListState()
        })
    },

    handleMouseLeaveEvents: function(){
        this.el.addEventListener("mouseleave", ()=>{
            var {selectedItemId} = this.data
            if(selectedItemId){
                var element = document.querySelector(`#${selectedItemId}`)
                var id = element.getAttribute("id")
                if(id == selectedItemId){
                    element.setAttribute("material", {color: "white", opacity: 1})
                }
            }
        })
    }
})
