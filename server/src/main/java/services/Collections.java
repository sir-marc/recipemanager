package services;

import java.util.List;
import java.util.Properties;
import java.util.Set;

import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;

import com.google.appengine.api.datastore.DatastoreService;
import com.google.appengine.api.datastore.DatastoreServiceFactory;
import com.google.appengine.api.datastore.Entity;
import com.google.appengine.api.datastore.EntityNotFoundException;
import com.google.appengine.api.datastore.FetchOptions;
import com.google.appengine.api.datastore.Key;
import com.google.appengine.api.datastore.KeyFactory;
import com.google.appengine.api.datastore.PreparedQuery;
import com.google.appengine.api.datastore.Query;
import com.google.appengine.api.datastore.Query.Filter;
import com.google.appengine.api.datastore.Query.FilterOperator;
import com.google.appengine.api.datastore.Query.FilterPredicate;

@Path("/collections")
public class Collections {

	@GET
	@Path("/")
	@Produces(MediaType.APPLICATION_JSON)
	public List<Entity> getAll(@QueryParam("owner") String owner) {
	    DatastoreService datastore = DatastoreServiceFactory.getDatastoreService();
	    Filter filter = new FilterPredicate("owner", FilterOperator.EQUAL, owner);
	    Query query = new Query("collections").setFilter(filter);
		PreparedQuery pq = datastore.prepare(query);
		List<Entity> results = pq.asList(FetchOptions.Builder.withDefaults());
		return results;
	}
	
	@GET
	@Path("/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public Entity getOne(@PathParam("id") long id) {
	    DatastoreService datastore = DatastoreServiceFactory.getDatastoreService();
		Key key = KeyFactory.createKey("collections", id);
		try {
			return datastore.get(key);		
		} catch (Exception e) {
			return null;
		}
	}

	@POST
	@Path("/")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Entity post(Properties recipe) {
	    DatastoreService datastore = DatastoreServiceFactory.getDatastoreService();
	    Entity entity=new Entity("collections");
	    
	    Set<String> keys = recipe.stringPropertyNames();
	    for (String key : keys) {
		    entity.setProperty(key, recipe.getProperty(key));
	    }
	    datastore.put(entity);
		return entity;
	}
	
	
	@DELETE
	@Path("/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public long delete(@PathParam("id") long id) {
	    DatastoreService datastore = DatastoreServiceFactory.getDatastoreService();
		Key key = KeyFactory.createKey("collections", id);
		try {
			datastore.delete(key);
			return id;		
		} catch (Exception e) {
			System.out.println("did not go well");
			return -1;
		}
	}

    @PUT
    @Path("/{id}")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Entity update(@PathParam("id") long id, Properties collection) throws EntityNotFoundException {
    	DatastoreService datastore = DatastoreServiceFactory.getDatastoreService();
    	Key key = KeyFactory.createKey("Collections", id);
    	Entity entity=datastore.get(key);
    
	    Set<String> keys = collection.stringPropertyNames();
	    for (String valueKey : keys) {
		    entity.setProperty(valueKey, collection.getProperty(valueKey));
	    }
	    datastore.put(entity);
		return entity;
	}
}