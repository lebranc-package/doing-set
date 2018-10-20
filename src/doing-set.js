module.exports = function() {
    let collection = []

    this.has = function(element) {
        return collection.indexOf(element) !== -1 
    }

    this.values = function() {
        return collection
    }

    this.add = function(element) {
        if(!this.has(element)) {
            collection.push(element)
            return true
        }
        return false
    }

    this.remove = function(element) {
        if(this.has(element)) {
            index = collection.indexOf(element)
            collection.splice(index,1)
            return true
        }
        return false
    }

    this.size = function() {
        return collection.length
    }

    this.union = function(otherset) {
        let unionset = new Set()
        let firstset = this.values()
        let secondset = otherset.values()
        firstset.forEach(function(e) {
            unionset.add(e)
        })
        secondset.forEach(function(e) {
            unionset.add(e)
        })
        return unionset
    }

    this.interception = function(otherset) {
        let interceptionset = new Set()
        let firstset = this.values()
        let secondset = otherset.values()
        firstset.forEach(function(e) {
            if(otherset.has(e)) {
                interceptionset.add(e)
            }
        })
        return interceptionset
    }

    this.difference = function(otherset) {
        let differenceset = new Set()
        let firstset = this.values()
        let secondset = otherset.values()
        firstset.forEach(function(e) {
            if(!otherset.has(e)) {
                differenceset.add(e)
            }
        })
        return differenceset
    }

    this.subset = function(otherset) {
        let firstset = this.values()
        return firstset.every(function(e) {
            return otherset.has(e)
        })
    }
}